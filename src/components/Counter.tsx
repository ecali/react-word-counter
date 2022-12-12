export const Counter = (props: { title: string; count: number }) => {
    return (
      <div>
        <h5>{props.count}</h5>
        <p>{props.title}</p>
      </div>
    );
  };
  