<%@ page language="java" contentType="text/html ; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.*, java.text.*, backend.*" %>

<!DOCTYPE html SYSTEM "about:legacy-compat">

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>game engine</title>
    
    <link rel="stylesheet" href="styles.css">

</head>
    <!-- Classe Sprite: -->
    <script src="./Class/Sprite.js"></script>

    <!-- Objetos: -->
    <script src="./Objects/labelNovaFase.js" ></script>
    <script src="./Objects/estados.js" ></script>
    <script src="./Objects/chao.js" ></script>
    <script src="./Objects/bloco.js" ></script>
    <script src="./Objects/obstaculos.js" ></script>
    <script src="./Objects/imagemFundo.js" ></script>

<body id="index">
    <div id="User-Identity">
        
    </div>
    <div id="App-Camp">
        <!-- Chamada para a Aplicação: -->
        <script src="./Application/app.js" ></script>
    </div>
    <div id="ranking">
    
    	<table>
			<tr>
				<th colspan="5" > Lista de Users </th>
			</tr>
		
			<tr>
				<th>ID</th>
				<th align="left" >Nome:</th>
				<th align="left" >Record:</th>
			</tr>
			<% 
				UserDao dao = new UserDao();
				List<User> users = dao.getLista();
				for ( User user : users ) {
			
			%>
			<tr>
				<th><%=user.getId()%></th>
				<th align="left" ><%=user.getName()%></th>
				<th align="left" ><%=user.getRecord()%></th>
		
			<%
				}
			%>
	</table>
    </div>
   
</body>
</html>