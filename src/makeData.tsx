export interface Data {
  col1: string;
  col2: string;
}

const makeData = (length: number): Data[] => {
  console.log(length)
  const data = [
    {
      col1: "Hello",
      col2: "World",
    },
    {
      col1: "react-table",
      col2: "rocks",
    },
    {
      col1: "whatever",
      col2: "you want",
    },
  ];

  return data;
};

export default makeData
