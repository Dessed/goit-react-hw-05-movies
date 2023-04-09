
export const GenresMovie = ({genres}) => {
     return genres?.map(({id, name}) => <li key={id}>{name}</li>)
 };