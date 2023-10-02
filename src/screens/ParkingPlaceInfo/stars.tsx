import Ionicons from "react-native-vector-icons/Ionicons";

export const Stars = ({ rating }) => {
  let starList = [];
  let i = 0;

  for (; i < rating; i++)
    starList.push("star");

  for (; i < 5; i++)
    starList.push("star-outline");

  /*
   * Não estamos exibindo estrelas preenchidas pela metade porque o ícone do Ionicons é bem feio
   */

  return (
    <>
      { starList.map((type, index) => (
          <Ionicons name={type} color="white" size={21} key={index} />
      ))}
    </>
  );
}