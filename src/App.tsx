type PropsApp = {
  name: string;
};
export function App({ name }: PropsApp) {
  return <h1>{name}</h1>;
}
