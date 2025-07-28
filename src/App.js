
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import SearchResults from "./Components/SearchResults";
import Librery from "./Components/Librery";

const dabase = [
    { id: 1, nombre: "Cielo", autor: "Benny Ibarra", duracion: "3:50" },
    { id: 2, nombre: "Vivir mi vida", autor: "Marc Anthony", duracion: "4:11" },
    { id: 3, nombre: "Despacito", autor: "Luis Fonsi ft. Daddy Yankee", duracion: "3:48" },
    { id: 4, nombre: "Shallow", autor: "Lady Gaga & Bradley Cooper", duracion: "3:37" },
    { id: 5, nombre: "Imagine", autor: "John Lennon", duracion: "3:01" },
    { id: 6, nombre: "What a Wonderful World", autor: "Louis Armstrong", duracion: "2:58" },
    { id: 7, nombre: "Billie Jean", autor: "Michael Jackson", duracion: "4:54" },
    { id: 8, nombre: "Rolling in the Deep", autor: "Adele", duracion: "3:48" },
    { id: 9, nombre: "Bohemian Rhapsody", autor: "Queen", duracion: "5:54" },
    { id: 10, nombre: "Shape of You", autor: "Ed Sheeran", duracion: "3:53" },
    { id: 11, nombre: "Thunder", autor: "Imagine Dragons", duracion: "3:07" },
    { id: 12, nombre: "Perfect", autor: "Ed Sheeran", duracion: "4:23" },
    { id: 13, nombre: "Hurt", autor: "Johnny Cash", duracion: "3:38" },
    { id: 14, nombre: "Sorry", autor: "Justin Bieber", duracion: "3:20" },
    { id: 15, nombre: "You Are The Reason", autor: "Calum Scott", duracion: "3:25" },
    { id: 16, nombre: "Tears Dry on Their Own", autor: "Amy Winehouse", duracion: "3:04" },
    { id: 17, nombre: "Can't Help Falling in Love", autor: "Elvis Presley", duracion: "3:01" },
    { id: 18, nombre: "Stay With Me", autor: "Sam Smith", duracion: "2:52" },
    { id: 19, nombre: "Dance Monkey", autor: "Tones and I", duracion: "3:29" },
    { id: 20, nombre: "Ain't No Mountain High Enough", autor: "Marvin Gaye & Tammi Terrell", duracion: "2:28" },
    { id: 21, nombre: "My Heart Will Go On", autor: "Celine Dion", duracion: "4:41" },
    { id: 22, nombre: "Uptown Funk", autor: "Mark Ronson ft. Bruno Mars", duracion: "4:30" },
    { id: 23, nombre: "Someone Like You", autor: "Adele", duracion: "4:45" },
    { id: 24, nombre: "Firework", autor: "Katy Perry", duracion: "3:48" },
    { id: 25, nombre: "Stronger", autor: "Kanye West", duracion: "5:11" },
    { id: 26, nombre: "All of Me", autor: "John Legend", duracion: "4:30" },
    { id: 27, nombre: "Lose Yourself", autor: "Eminem", duracion: "5:26" },
    { id: 28, nombre: "Rolling in the Deep", autor: "Adele", duracion: "3:48" },
    { id: 29, nombre: "Thinking Out Loud", autor: "Ed Sheeran", duracion: "4:41" },
    { id: 30, nombre: "La La La", autor: "Naughty Boy ft. Sam Smith", duracion: "3:40" },
    { id: 31, nombre: "Stay", autor: "Rihanna ft. Mikky Ekko", duracion: "4:01" },
    { id: 32, nombre: "Radioactive", autor: "Imagine Dragons", duracion: "3:06" },
    { id: 33, nombre: "Blackbird", autor: "The Beatles", duracion: "2:18" },
    { id: 34, nombre: "I Will Always Love You", autor: "Whitney Houston", duracion: "4:31" },
    { id: 35, nombre: "Someone You Loved", autor: "Lewis Capaldi", duracion: "3:02" },
    { id: 36, nombre: "No Tears Left to Cry", autor: "Ariana Grande", duracion: "3:25" },
    { id: 37, nombre: "Shut Up and Dance", autor: "WALK THE MOON", duracion: "3:38" },
    { id: 38, nombre: "Chasing Cars", autor: "Snow Patrol", duracion: "4:27" },
    { id: 39, nombre: "The Scientist", autor: "Coldplay", duracion: "5:09" },
    { id: 40, nombre: "Billie Eilish", autor: "When the Party's Over", duracion: "3:13" },
    { id: 41, nombre: "Let It Be", autor: "The Beatles", duracion: "3:50" },
    { id: 42, nombre: "Rolling in the Deep", autor: "Adele", duracion: "3:48" },
    { id: 43, nombre: "What Do You Mean?", autor: "Justin Bieber", duracion: "3:25" },
    { id: 44, nombre: "Happier", autor: "Marshmello ft. Bastille", duracion: "3:34" },
    { id: 45, nombre: "Señorita", autor: "Shawn Mendes & Camila Cabello", duracion: "3:10" },
    { id: 46, nombre: "Meant to Be", autor: "Bebe Rexha & Florida Georgia Line", duracion: "2:43" },
    { id: 47, nombre: "Lean On", autor: "Major Lazer ft. DJ Snake", duracion: "2:56" },
    { id: 48, nombre: "Shake It Off", autor: "Taylor Swift", duracion: "3:39" },
    { id: 49, nombre: "On Top of the World", autor: "Imagine Dragons", duracion: "3:12" },
    { id: 50, nombre: "A Million Dreams", autor: "The Greatest Showman Cast", duracion: "4:31" }
];
function App() {
  
  const [favoritos,setfavoritos] = useState([])
  const [addfavs,setAddFAvs] = useState(false)

  useEffect(() => {
    
    setAddFAvs(false)
    const showMessenge = setTimeout(() =>{
      setAddFAvs(true)
      
    },5000)
  },[favoritos])
 
  const [busqueda,setbusqueda] = useState([])

  const buscar = (e) =>{
    e.preventDefault()
    const results = []
    for(let i of dabase){
      
      if(i.nombre === e.target[0].value || i.autor === e.target[0].value){
        results.push(i)
      }
    }
    setbusqueda(results)
    e.target[0].value = ""
  }

  return (
    <div className="App">
      <Header show={addfavs}/>
      <form onSubmit={buscar}>
        <label htmlFor="buscar" name="buscar">Buscar</label>
        <input type="text" id="buscar"></input>
        <button type="submit">BUscar</button>
      </form>
      {/* <SearchResults database={busqueda}/> */}
      <SearchResults 
          mySongs={busqueda}
          favoritos={favoritos}
          setfavoritos={setfavoritos}
      />
      <Librery favoritos={favoritos} setfavoritos={setfavoritos}/>
      
    </div>
  );
}

export default App;