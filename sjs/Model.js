
guidedModel =// @startlock
{
	Person :
	{
		fullName :
		{
			onGet:function()
			{// @endlock
				return this.firstName + ' ' + this.lastName;
			}// @startlock
		},
		email :
		{
			events :
			{
				onLoad:function(attributeName)
				{// @endlock
					try {
						currentSession().checkPermission('admin');
					}catch(e){
						this.email = "****";
					}
				}// @startlock
			}
		}
	}
};// @endlock
