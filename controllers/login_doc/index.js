var express =require('express');
var loginModel=require('../../models/login_doc');
var app =module.exports=express();

app.set('views', __dirname+'/views');

app.get('/doc', function(request, response){

	if(request.session.idDoc)
	{
		response.redirect("/homeD");
	}

	response.render('login_doc',{
		title:'Inicio de Sesion'
	});
});

app.post("/logind", function(req,res)
    {
    	loginDModel.getUsers(req.body.username,req.body.password, function(data)
    	{
    		if(data)
    		{
    			
	    		//si los datos no son correctos mandamos error como respuesta
                //a ajax,´así sabe que no ha sido correcto el login
	    		if(data.msg === "error")
	    		{
	    			res.send("error", 200);
	    		}
                //en otro caso creamos la sesión y mandamos logueado,
                //con lo que ajax redirigira a la home al usuario con 
                //la sesión iniciada 
	    		else
	    		{

	    			req.session.user_doc = req.body.username;
	    			req.session.idDoc = data[0].cat_codemp;
	    			res.send("logueado", 200);
	    		}
	    	}
	    	else
	    	{
	    		res.send("error", 200);
	    	}
    	});
    });


