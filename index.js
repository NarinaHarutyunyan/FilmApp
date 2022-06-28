/* Տնային աշխատանք 16

1․ գլխավոր օբջեքթի մեջ ստեղծել showMyDB մեթոդ, որը կստուգի privat-ը, եթե լինի false ապա գլխավոր օբջեքթը չպետք ա կոնսոլ լինի, եթե true ապա պետք ա կոնսոլ լինի

2․ գլխավոր օբջեքթի մեջ ստեղծել yourFavoriteGenres մեթոդ, որի մեջ յուզեռը պետք ա երեք անգամ պատասխանի այց հարցին ՝ « Ձեր նախընտրելի ժանրը» ու կողքից գրվի հարցի թիվը, այսինքն առաջին հարցը կլինի 1, երկրորդ հարցը կլինի 2, երրորդ հարցը կլինի 3, ու էդ ամեն ինչը պետք ա գրեք genres անունով զանգվածի մեջ

3․ պետք ա ներկայիս կոդը օպտիմիզացնեք ու ձեր ստեղծած մեթոդները դնեք ստուգման տակ, որպեսզի յուզեռը չկարողանաք ոչ քենսլ անի, ոչ դատարկ վալյու ուղարկի ոչ էլ 20ից շատ տառ 
4. numberOfFilms-ը պետք ա լինի ՄԻԱՅՆ ԹԻՎ, եթե թիվ չի while-ով էնքան անել, որ յուզեռը թիվ գրի*/
"use strict";
let countOfFilms;
while ( isNaN(countOfFilms) ) {
  countOfFilms= +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
  
}
const numberOfFilms = countOfFilms;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
    showMyDB(){
        switch(personalMovieDB.privat){
           case false : console.log("Տվյալներ չեն գտնվել, քանի որ բազան փակ է!!!"); break; 
		   default: console.log(personalMovieDB); 
        }
    },
    yourFavoriteGenres(){
        for(let j = 0; j < 3; j++){
            const question = prompt(`${j + 1}.Ո՞ր ժանրի ֆիլմեր եք նախընտրում`);
			if( question !== undefined && question !== null && question !== ""  && question.length <= 20 ){
				personalMovieDB.genres[j] = question;
				
			}
			else{
				console.log("Error");
				j--;
			}
        }

    },
};
personalMovieDB.showMyDB();
personalMovieDB.yourFavoriteGenres();

if (numberOfFilms == null || numberOfFilms === 0 || numberOfFilms < 0 || numberOfFilms == "") {
	console.log("Տեղի է ունեցել անհայտ խնդիր");
} else {
	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք Կինոման եք !!!");
	}
}

for (let i = 0; i < 2; i++) {
	const a = prompt("Ո՞րն ֆիլմն եք վերջերս դիտել", "");
	const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("OK");
	} else {
		console.log("ERROR");
		i--;
	}
}


