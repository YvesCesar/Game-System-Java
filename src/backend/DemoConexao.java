package backend;

import java.sql.Connection;
import java.sql.SQLException;

public class DemoConexao {

	public static void main(String[] args) throws SQLException {
		Connection con = new Conexao().getConnection();
			System.out.println("Conexão Aberta!");
			con.close();
	}
}
