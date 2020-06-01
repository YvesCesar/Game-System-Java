package backend;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.rowset.serial.SerialException;

public class UserDao {
	// a conexão com o banco de dados
		private Connection connection;

		public UserDao() {
			this.connection = new Conexao().getConnection();
		}

		// Metodo para Insert no Banco
		public void adiciona(User user) {
			String sql = "insert into users " + "(name,email,password,record)" + " values (?,?,?,?)";
			try {
				// prepared statement para inserção
				PreparedStatement stmt = connection.prepareStatement(sql);

				// seta os valores
				stmt.setString(1, user.getName());
				stmt.setString(2, user.getEmail());
				stmt.setString(3, user.getPassword());
				stmt.setInt(4, user.getRecord());

				// executa
				stmt.execute();
				stmt.close();
			} catch (SQLException e) {
				throw new RuntimeException(e);
			}
		}

		// Metodo para Executar uma Select no Banco
		public List<User> getLista() {
			try {
				List<User> users = new ArrayList<User>();
				PreparedStatement stmt = this.connection.prepareStatement("select * from users");
				ResultSet rs = stmt.executeQuery();

				while (rs.next()) {
					// criando o objeto User
					User user = new User();
					user.setId(rs.getLong("id"));
					user.setName(rs.getString("name"));
					user.setEmail(rs.getString("email"));
					user.setPassword(rs.getString("password"));
					user.setRecord(rs.getInt("record"));

					// adicionando o objeto à lista
					users.add(user);
				}
				rs.close();
				stmt.close();
				return users;

			} catch (SQLException e) {
				throw new RuntimeException(e);
			}
		}

		public void altera(User user) {
			String sql = "update users set name=?, email=?, password=?," + "record=? where id=?";

			try {
				PreparedStatement stmt = connection.prepareStatement(sql);

				stmt.setString(1, user.getName());
				stmt.setString(2, user.getEmail());
				stmt.setString(3, user.getPassword());
				stmt.setInt(4, user.getRecord());
				stmt.setLong(5, user.getId());

				stmt.execute();
				stmt.close();
			} catch (SQLException e) {
				throw new RuntimeException(e);
			}
		}

		public void remove(User user) {
			try {
				PreparedStatement stmt = connection.prepareStatement("delete" + "from users where id=?");
				stmt.setLong(1, user.getId());
				stmt.execute();
				stmt.close();
			} catch (SQLException e) {
				throw new RuntimeException(e);
			}
		}

		public void remove(long id) {
			try {
				PreparedStatement stmt = connection.prepareStatement("delete from users where id=?");
				stmt.setLong(1, id);
				stmt.execute();
				stmt.close();
			} catch (SQLException e) {
				throw new RuntimeException(e);
			}
		}

		public User getUser(HttpServletRequest request, HttpServletResponse response)
				throws SerialException, IOException {

			// OBS: alterar o agrupamento do banco para utf8_general_ci

			try {
				int idUser = Integer.parseInt(request.getParameter("idUser").toString());
				PreparedStatement stmt = this.connection.prepareStatement("Select * From users Where id =" + idUser);
				ResultSet rs = stmt.executeQuery();
				User us = new User();

				while (rs.next()) {

					us.setId((long) rs.getInt("id"));
					us.setName(rs.getString("name"));
					us.setEmail(rs.getString("email"));
					us.setPassword(rs.getString("password"));
					us.setRecord(rs.getInt("record"));

				}

				rs.close();
				stmt.close();
				return us;

			} catch (SQLException e) {
				throw new RuntimeException(e);
			}

		}

		// Buscar o numero do ultimo user
		public int getultCod() {
			int cont = 0;
			try {
				PreparedStatement stmt = this.connection.prepareStatement("SELECT id FROM users");
				ResultSet rs = stmt.executeQuery();

				while (rs.next()) {
					cont = rs.getInt("id");
				}

				cont++;

				rs.close();
				stmt.close();
				return cont;
			} catch (SQLException e) {
				throw new RuntimeException(e);
			}
		}
}
