// Homework factory
app.factory('HomeworkFactory', function(){
	return {
		getHomework: function(){
			return [{
  					assignment: 'Test First JavaScript',
  					url: 'http://github.com/Jiaza492/Workshop1',
  					status: 'completed'
					},
					{
 					assignment: 'Flash-Cards Day 1',
  					url: 'http://github.com/Jiaza492/Workshop2',
  					status: 'completed'
					},
					{
					assignment: 'Flash-Cards Day 2',
  					url: 'http://github.com/Jiaza492/Workshop3',
  					status: 'completed'
					},
					{
					assignment: 'Flash-Cards Day 3',
  					url: 'http://github.com/Jiaza492/WorkShop4',
  					status: 'completed'
					},
					{
					assignment: 'Flash-Cards Day 4',
  					url: 'Empty',
  					status: 'not posted'
					}]
			}
		}									
})