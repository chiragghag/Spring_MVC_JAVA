<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Being Java Guys | Registration Form</title>
</head>
<body>
<center>
<br><br><br><br><br><br>
<div style="color: teal;font-size: 30px">Being Java Guys | Registration Form</div>
<br><br>
<c:url var="userRegistration" value="saveUser.html"/>
<form:form id="registerForm" modelAttribute="Property" method="post" action="${userRegistration}">
<table width="400px" height="150px">
<tr>
<td><form:label path="sellrent">sellrent</form:label></td>
<td><form:input  path="sellrent"/></td>
</tr>
<tr>
<td><form:label path="rescom">rescom</form:label></td>
<td><form:input  path="rescom"/></td>
</tr>
<tr>
<td><form:label path="city">city</form:label></td>
<td><form:radiobuttons path="city" items="${model.gender}"/></td>
</tr>
<tr>
<td><form:label path="town">town</form:label></td>
<td><form:select path="town" items="${model.city}"></form:select></td>
</tr>
<tr><td></td><td>
<input type="submit" value="Register" />
</td></tr>
</table>
</form:form>
<br>
<a href="userList.html" >Click Here to see User List</a>
</center>
</body>
</html>