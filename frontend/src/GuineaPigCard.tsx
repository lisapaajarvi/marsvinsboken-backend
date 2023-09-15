import { Guineapig } from "./App";

interface Props {
  guineapig: Guineapig;
}

export default function GuineaPigCard({ guineapig }: Props) {
  return (
    <li>
      {guineapig.name}, {guineapig.age} {" år"}{" "}
      {guineapig.likes && ", gillar: " + guineapig.likes}
    </li>
  );
}
