export interface IPeople {
   count:    number;
   next:     null;
   previous: null;
   results:  IPeopleItem[];
}

export interface IPeopleItem {
   name:       string;
   height:     string;
   mass:       string;
   hair_color: string;
   skin_color: string;
   eye_color:  string;
   birth_year: string;
   gender:     string;
   homeworld:  string;
   films:      string[];
   species:    any[];
   vehicles:   string[];
   starships:  string[];
   created:    Date;
   edited:     Date;
   url:        string;
}