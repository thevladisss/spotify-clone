
export default function Layout(props: Record<string, any>) {
  return (
    <div className="text-white">
      <p className="text-white">
        Layout for songs
      </p>
      {props.children}
    </div>
  );
}
