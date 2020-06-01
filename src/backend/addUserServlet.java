package backend;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/addUserServlet")

public class addUserServlet extends HttpServlet{
	
	private static final long serialVersionUID = 1L;
	
	protected void service(HttpServletRequest request, 
			HttpServletResponse response)
			throws IOException, ServletException {

		//Busca o writer 
		//PrintWriter out = response.getWriter();
		
		//Busscando os parâmetros do request
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		//String record = request.getParameter("record");
		
		//Monta o Objeto contato
		User user = new User();
		user.setName(name);
		user.setEmail(email);
		user.setPassword(password);
		//user.setRecord(Integer.parseInt(record));
		
		//Salva o contato
		UserDao dao = new UserDao();
		dao.adiciona(user);
		
		RequestDispatcher rd = request.getRequestDispatcher("/login.html");
			rd.forward(request, response);
	}
}
