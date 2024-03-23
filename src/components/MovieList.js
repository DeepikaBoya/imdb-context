import MovieCard from "./MovieCard";
import Heading from "./heading";
import {useState,useEffect,useMemo} from "react";
import { useContext } from 'react';

import Pagination from "./Pagination";
import { FavouriteMovieContext } from "../context/FavouriteMovie";

// const data = {
//   dates: {
//     maximum: "2024-03-27",
//     minimum: "2024-03-06",
//   },
//   page: 1,
//   results: [
//     {
//       adult: false,
//       backdrop_path: "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
//       genre_ids: [28, 27, 53],
//       id: 1096197,
//       original_language: "en",
//       original_title: "No Way Up",
//       overview:
//         "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
//       popularity: 2449.075,
//       poster_path: "/7FpGJTN8IL6IBvQMp6YHBFyhO9Z.jpg",
//       release_date: "2024-01-18",
//       title: "No Way Up",
//       video: false,
//       vote_average: 5.953,
//       vote_count: 95,
//     },
//     {
//       adult: false,
//       backdrop_path: "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
//       genre_ids: [878, 10749, 35],
//       id: 792307,
//       original_language: "en",
//       original_title: "Poor Things",
//       overview:
//         "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
//       popularity: 1645.631,
//       poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
//       release_date: "2023-12-07",
//       title: "Poor Things",
//       video: false,
//       vote_average: 8.056,
//       vote_count: 1617,
//     },
//     {
//       adult: false,
//       backdrop_path: "/qBQV4i2sjIydDJUKm7pwvpyfy5p.jpg",
//       genre_ids: [28, 12, 878],
//       id: 693134,
//       original_language: "en",
//       original_title: "Dune: Part Two",
//       overview:
//         "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
//       popularity: 1654.303,
//       poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
//       release_date: "2024-02-27",
//       title: "Dune: Part Two",
//       video: false,
//       vote_average: 8.5,
//       vote_count: 472,
//     },
//     {
//       adult: false,
//       backdrop_path: "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
//       genre_ids: [28, 53, 10752],
//       id: 969492,
//       original_language: "en",
//       original_title: "Land of Bad",
//       overview:
//         "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
//       popularity: 1468.938,
//       poster_path: "/h27WHO2czaY5twDmV3Wfx5IdqoE.jpg",
//       release_date: "2024-01-25",
//       title: "Land of Bad",
//       video: false,
//       vote_average: 6.984,
//       vote_count: 253,
//     },
//     {
//       adult: false,
//       backdrop_path: "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
//       genre_ids: [16, 28, 12, 35, 10751],
//       id: 940551,
//       original_language: "en",
//       original_title: "Migration",
//       overview:
//         "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
//       popularity: 1110.13,
//       poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
//       release_date: "2023-12-06",
//       title: "Migration",
//       video: false,
//       vote_average: 7.618,
//       vote_count: 822,
//     },
//     {
//       adult: false,
//       backdrop_path: "/dmiN2rakG9hZW04Xx7mHOoHTOyD.jpg",
//       genre_ids: [35],
//       id: 673593,
//       original_language: "en",
//       original_title: "Mean Girls",
//       overview:
//         "New student Cady Heron is welcomed into the top of the social food chain by the elite group of popular girls called ‘The Plastics,’ ruled by the conniving queen bee Regina George and her minions Gretchen and Karen. However, when Cady makes the major misstep of falling for Regina’s ex-boyfriend Aaron Samuels, she finds herself prey in Regina’s crosshairs. As Cady sets to take down the group’s apex predator with the help of her outcast friends Janis and Damian, she must learn how to stay true to herself while navigating the most cutthroat jungle of all: high school.",
//       popularity: 364.282,
//       poster_path: "/fbbj3viSUDEGT1fFFMNpHP1iUjw.jpg",
//       release_date: "2024-01-10",
//       title: "Mean Girls",
//       video: false,
//       vote_average: 6.385,
//       vote_count: 218,
//     },
//     {
//       adult: false,
//       backdrop_path: "/1QuloKG6VhFB94BhjX7VknKsNmZ.jpg",
//       genre_ids: [18, 53],
//       id: 1026436,
//       original_language: "en",
//       original_title: "Miller's Girl",
//       overview:
//         "A precocious young writer becomes involved with her high school creative writing teacher in a dark coming-of-age drama that examines the blurred lines of emotional connectivity between professor and protégé.",
//       popularity: 404.94,
//       poster_path: "/aygFQeDmmtlArzo8epmsOg9mz9f.jpg",
//       release_date: "2024-01-18",
//       title: "Miller's Girl",
//       video: false,
//       vote_average: 6.699,
//       vote_count: 158,
//     },
//     {
//       adult: false,
//       backdrop_path: "/uUiIGztTrfDhPdAFJpr6m4UBMAd.jpg",
//       genre_ids: [14, 28, 878],
//       id: 634492,
//       original_language: "en",
//       original_title: "Madame Web",
//       overview:
//         "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
//       popularity: 321.929,
//       poster_path: "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
//       release_date: "2024-02-14",
//       title: "Madame Web",
//       video: false,
//       vote_average: 5.416,
//       vote_count: 290,
//     },
//     {
//       adult: false,
//       backdrop_path: "/fCwwzOziFYs7YRwP4gbrb9qH1xg.jpg",
//       genre_ids: [28, 12, 16, 35, 10751],
//       id: 1011985,
//       original_language: "en",
//       original_title: "Kung Fu Panda 4",
//       overview:
//         "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
//       popularity: 299.246,
//       poster_path: "/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg",
//       release_date: "2024-03-06",
//       title: "Kung Fu Panda 4",
//       video: false,
//       vote_average: 6.7,
//       vote_count: 3,
//     },
//     {
//       adult: false,
//       backdrop_path: "/veIyxxi5Gs8gvztLEW1Ysb8rrzs.jpg",
//       genre_ids: [28, 878, 12],
//       id: 823464,
//       original_language: "en",
//       original_title: "Godzilla x Kong: The New Empire",
//       overview:
//         "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
//       popularity: 296.015,
//       poster_path: "/bQ2ywkchIiaKLSEaMrcT6e29f91.jpg",
//       release_date: "2024-03-27",
//       title: "Godzilla x Kong: The New Empire",
//       video: false,
//       vote_average: 0,
//       vote_count: 0,
//     },
//     {
//       adult: false,
//       backdrop_path: "/bPe6svQylMx7zS4RyuMJbOL46ao.jpg",
//       genre_ids: [10402, 18],
//       id: 802219,
//       original_language: "en",
//       original_title: "Bob Marley: One Love",
//       overview:
//         "Jamaican singer-songwriter Bob Marley overcomes adversity to become the most famous reggae musician in the world.",
//       popularity: 272.274,
//       poster_path: "/mKWalirPreEdCKDJjc5TKeOP2xi.jpg",
//       release_date: "2024-02-14",
//       title: "Bob Marley: One Love",
//       video: false,
//       vote_average: 6.773,
//       vote_count: 176,
//     },
//     {
//       adult: false,
//       backdrop_path: "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
//       genre_ids: [28, 35],
//       id: 897087,
//       original_language: "en",
//       original_title: "Freelance",
//       overview:
//         "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
//       popularity: 269.879,
//       poster_path: "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
//       release_date: "2023-10-05",
//       title: "Freelance",
//       video: false,
//       vote_average: 6.563,
//       vote_count: 592,
//     },
//     {
//       adult: false,
//       backdrop_path: "/8b1oWeOQLSwQH6TK3T0b1oNl3Al.jpg",
//       genre_ids: [16, 18, 10751, 36],
//       id: 676727,
//       original_language: "en",
//       original_title: "The Inventor",
//       overview:
//         'The insatiably curious and headstrong inventor Leonardo da Vinci leaves Italy to join the French court, where he can experiment freely, inventing flying contraptions, incredible machines, and study the human body. There, joined in his adventure by the audacious princess Marguerite, Leonardo will uncover the answer to the ultimate question – "What is the meaning of it all?"',
//       popularity: 308.554,
//       poster_path: "/7Rpo5S3GjORu3yjah0o9eLcllSj.jpg",
//       release_date: "2023-09-15",
//       title: "The Inventor",
//       video: false,
//       vote_average: 5.778,
//       vote_count: 9,
//     },
//     {
//       adult: false,
//       backdrop_path: "/aINel9503ompOlGKn4sIVMg09Un.jpg",
//       genre_ids: [9648, 27, 53],
//       id: 838209,
//       original_language: "ko",
//       original_title: "파묘",
//       overview:
//         "After suffering from serial paranormal events, a wealthy family living in LA summons a young rising shaman duo Hwa-rim and Bong-gil to save the newborn of the family. Once they arrive, Hwa-rim senses a dark shadow of their ancestor has latched on the family, so-called a ‘Grave’s Calling’. In order to exhume the grave and relieve the ancestor, Hwa-rim seeks help from the top-notch geomancer Sang-duk and the mortician Young-geun. To their dismay, the four find the grave at a shady location in a remote village in Korea. Unaware of the consequences, the exhumation is carried out, yet this rather unleashes a malevolent force buried underneath…",
//       popularity: 251.824,
//       poster_path: "/pQYHouPsDw32FhDLr7E3jmw0WTk.jpg",
//       release_date: "2024-02-22",
//       title: "Exhuma",
//       video: false,
//       vote_average: 8.8,
//       vote_count: 7,
//     },
//     {
//       adult: false,
//       backdrop_path: "/aPQsU3yLDUOhLJYnSqkhKRkQTAw.jpg",
//       genre_ids: [36, 18, 10752],
//       id: 467244,
//       original_language: "en",
//       original_title: "The Zone of Interest",
//       overview:
//         "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
//       popularity: 180.47,
//       poster_path: "/hUu9zyZmDd8VZegKi1iK1Vk0RYS.jpg",
//       release_date: "2023-12-15",
//       title: "The Zone of Interest",
//       video: false,
//       vote_average: 7.361,
//       vote_count: 539,
//     },
//     {
//       adult: false,
//       backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
//       genre_ids: [16, 10751, 35, 14],
//       id: 508947,
//       original_language: "en",
//       original_title: "Turning Red",
//       overview:
//         "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
//       popularity: 172.738,
//       poster_path: "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
//       release_date: "2022-03-10",
//       title: "Turning Red",
//       video: false,
//       vote_average: 7.401,
//       vote_count: 4797,
//     },
//     {
//       adult: false,
//       backdrop_path: "/hIeEpk2w1dnC9ly9ZJwwbunH2Cx.jpg",
//       genre_ids: [16, 35, 18, 10751],
//       id: 838240,
//       original_language: "es",
//       original_title: "Robot Dreams",
//       overview:
//         "Dog lives in Manhattan and he's tired of being alone. One day he decides to build himself a robot, a companion. Their friendship blossoms, until they become inseparable, to the rhythm of 80's NYC. One summer night, Dog, with great sadness, is forced to abandon Robot at the beach. Will they ever meet again?",
//       popularity: 209.209,
//       poster_path: "/qLtK6DFeuJNuB3THGVDklirhQ8u.jpg",
//       release_date: "2023-10-20",
//       title: "Robot Dreams",
//       video: false,
//       vote_average: 7.312,
//       vote_count: 77,
//     },
//     {
//       adult: false,
//       backdrop_path: "/47SVqaO02doJ06tOmrjiWDkwU3T.jpg",
//       genre_ids: [28, 53],
//       id: 927107,
//       original_language: "en",
//       original_title: "The Bricklayer",
//       overview:
//         "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
//       popularity: 153.266,
//       poster_path: "/36pYugctLa70NmwMEgXTR1G31Kq.jpg",
//       release_date: "2023-12-14",
//       title: "The Bricklayer",
//       video: false,
//       vote_average: 6.1,
//       vote_count: 130,
//     },
//     {
//       adult: false,
//       backdrop_path: "/nvW0QfRJ7ga9TK8DKwBfAPA8ywP.jpg",
//       genre_ids: [28, 18, 80],
//       id: 944401,
//       original_language: "en",
//       original_title: "Dogman",
//       overview:
//         "A boy, bruised by life, finds his salvation through the love of his dogs.",
//       popularity: 148.39,
//       poster_path: "/rmRkZZ2aZq72dDTjbPnSLtPQcmJ.jpg",
//       release_date: "2023-09-27",
//       title: "Dogman",
//       video: false,
//       vote_average: 7.396,
//       vote_count: 313,
//     },
//     {
//       adult: false,
//       backdrop_path: "/zxNAQeptsUIY53zdtvqqro0CgyB.jpg",
//       genre_ids: [18],
//       id: 1025491,
//       original_language: "en",
//       original_title: "Freud's Last Session",
//       overview:
//         "On the eve of the Second World War, two of the greatest minds of the twentieth century, C.S. Lewis and Sigmund Freud converge for their own personal battle over the existence of God. The film interweaves the lives of Freud and Lewis, past, present, and through fantasy, bursting from the confines of Freud’s study on a dynamic journey.",
//       popularity: 139.036,
//       poster_path: "/mp7IBxFuvNZSVOOGESybvaPxd7y.jpg",
//       release_date: "2023-12-22",
//       title: "Freud's Last Session",
//       video: false,
//       vote_average: 6.423,
//       vote_count: 13,
//     },
//   ],
//   total_pages: 48,
//   total_results: 953,
// };

export const genreids = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
  };


const MovieList = () => {
  const favouriteContextData=useContext(FavouriteMovieContext);

  const [movies, setMovies] = useState([]);
 
  const {watchlist}=favouriteContextData;

  const fetchMovies=(pageNo)=>
  {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f48a5b363c49e0c31bf3d09bb319827&page=${pageNo}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      return res.json();
    })
    .then((data) => setMovies(data.results || []))
    .catch((error) => console.error('Error fetching movies:', error));
    }
    
    
  
  const popularMovieCount=useMemo(()=>movies.filter((movie)=>
    {
      console.log("Recompute")
      return movie.popularity>1000

    }
  ).length,[movies]);
useEffect(()=>
{
  fetchMovies(1);
   
},[])
  
  return (
    <>

<Heading />
<p>Total watchlist:{watchlist.length}</p>
<p>Popular movies {">"}1000:{popularMovieCount}</p>

<div className="movie-list">
    {!movies.length && <p>Loading....</p>}
  {
  movies?.map(movie => (
    <MovieCard movie={movie} />
  ))}
</div>
<Pagination onPageChange={fetchMovies}/>
    </>
   
  );
};
export default MovieList;
