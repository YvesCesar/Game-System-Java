package backend;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {
	public Connection getConnection() {
		
		try {
			DriverManager.registerDriver( new com.mysql.jdbc.Driver() );
			System.out.println("Banco Conectado");
			return DriverManager.getConnection("jdbc:mysql://localhost/player", "root", "01private0110quarks");
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
}
