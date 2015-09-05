loginDeModel={};

loginDeModel.getUsers=function(user,pass,callback)
{
	if(connection)
	{
		var sql ='select usuario,password,fac from decanos where usuario='+connection.escape(user)+' '+'&& password='+connection.escape(pass);
		connection.query(sql,function(error,row){
			if (row.length == 0)
			{
				callback({msg:"error", data:""});
				
			}
			else
			{
				callback(row);
			}
		})
	}
}

module.exports=loginDeModel;