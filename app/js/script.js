
//Request to open JSON file and parse into javascript object
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
		//Typical action to be performed when the document is ready:
       let response = JSON.parse(xhttp.responseText);
      

       /* 
       Takes in 20 students, and sorts it first by grade, then alphabetically, and returns
       an updated records object newRecords
       */
       function groupByGrade(response){
			
			//Sorts the entire list of 20 students to be sorted numerically by grades (6, 7, 8)
			response.sort(function (a,b) {
				return (a.grade - b.grade);
											});

			//3 Arrays for each grade
			let grade6 = [];
			let grade7 = [];
			let grade8 = [];

			
			//Sorts through 20 students to put students into different arrays based on grade
			for(let i = 0; i < 20; i++)
			{
				if(response[i].grade == 6)
				{
					grade6.push(response[i]);
				}
				else if (response[i].grade == 7)
				{
					grade7.push(response[i]);
				}
				else if (response[i].grade == 8)
				{
					grade8.push(response[i]);
				}

			}
			

			//Arrays for each grade, then sorted alphabetically
			grade6.sort(function (a,b) {
				return a.name.localeCompare(b.name);
			});
			grade7.sort(function (a,b) {
				return a.name.localeCompare(b.name);
			});
			grade8.sort(function (a,b) {
				return a.name.localeCompare(b.name);
			});
			
			//Create a New Object to hold updated sorted records
			let newRecords = [];

			//Pushes previous arrays for each class, now sorted into newRecords
			newRecords.push(grade6);
			newRecords.push(grade7);
			newRecords.push(grade8);

			//Returns the updated records
			
			return newRecords;
  		
       }



       function findLowestAverages(response)
       {	
       		/*
       		Create arrays to hold Lowest Grades for each grade, as well as arrays
       		to hold students sorted via grade
       		*/
       		//Makes a real "copy" of response as to not impact first method
       		let response2 = JSON.parse(JSON.stringify(response));
            let lowgrades = [];
       		let class6 = [];
			let class7 = [];
			let class8 = [];

			//Sorts response into different arrays for each grade(class6, class7, class8)
       		for(let i = 0; i < 20; i++)
			{
				if(response2[i].grade == 6)
				{
					class6.push(response2[i]);
				}
				else if (response2[i].grade == 7)
				{
					class7.push(response2[i]);
				}
				else if (response2[i].grade == 8)
				{
					class8.push(response2[i]);
				}

			}	


			//Sorts through students of grade 6 to find average, add adds it to the array
			for(let j = 0; j < class6.length; j++)
			{
				let total = 0; 
				for(let k = 0; k < 4; k++)
				{
					total += class6[j].scores[k].value;
				}
				let average = total/4;
				
				
				class6[j].Average = average;
			}
			//Finds student in grade 6 with lowest average by looping through array
			let min6 = 0
			let index6;
			for(let j = 1 ; j < class6.length; j++)
			{
				min = class6[0].Average;
				if(class6[j].Average < min)
				{
					min = class6[j].Average
					index = j;
				}
			}
			lowgrades.push(class6[index]);
			//Checks if there are any other students with the same lowest grade
			for(let j = 0 ; j < class6.length; j++)
			{
				if((class6[j].Average == class6[index].Average) && (index != j))
				{
					lowgrades.push(class6[j]);
				}
			}

			//Sorts through students of grade 7 to find average, add adds it to the array
			for(let j = 0; j < class7.length; j++)
			{
				let total = 0; 
				for(let k = 0; k < 4; k++)
				{
					total += class7[j].scores[k].value;
				}
				let average = total/4;
				
				
				class7[j].Average = average;
			}
			
			let min7 = 0
			let index7;
			for(let j = 1 ; j < class7.length; j++)
			{
				min = class7[0].Average;
				if(class7[j].Average < min)
				{
					min = class7[j].Average
					index = j;
				}
			}
			lowgrades.push(class7[index]);
			//Checks if there are any other students with the same lowest grade
			for(let j = 0 ; j < class7.length; j++)
			{
				if((class7[j].Average == class7[index].Average) && (index != j))
				{
					lowgrades.push(class7[j]);
				}
			}

			//Sorts through students of grade 8 to find average, add adds it to the array
			for(let j = 0; j < class8.length; j++)
			{
				let total = 0; 
				for(let k = 0; k < 4; k++)
				{
					total += class8[j].scores[k].value;
				}
				let average = total/4;
				
				
				class8[j].Average = average;
			}
			
			let min8 = 0
			let index8;
			for(let j = 1 ; j < class8.length; j++)
			{
				min = class8[0].Average;
				if(class8[j].Average < min)
				{
					min = class8[j].Average
					index = j;
				}
			}
			lowgrades.push(class8[index]);

			//Checks if there are any other students with the same lowest grade
			for(let j = 0 ; j < class8.length; j++)
			{
				if((class8[j].Average == class8[index].Average) && (index != j))
				{
					lowgrades.push(class8[j]);
				}
			}


			//Returns array holding lowest grades for each class
			return lowgrades;
      }




      //Ouputs the result of both function onto console
   	  console.log(groupByGrade(response));
      console.log(findLowestAverages(response));



    }
	};




xhttp.open("GET", "students.json", true);
xhttp.send();






