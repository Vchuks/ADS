import { useEffect, useState } from "react";
// import { BiLoaderCircle } from "react-icons/bi";

const paginateStyles = {
  flex: {
    display: "flex",
    marginBottom: "10px",
    marginTop: "15px",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    // position: "absolute",
    // bottom: 0
  },
  button: {
    background: "none",
    color: "black",
    border: "2px solid #CED4DF",
    width: "147px",
    padding: "5px",
  },
  page: {
    color: "#fff",
    background: "#020062",
    padding: "5px",
    width: "30px",
    marginLeft: "5px",
  },
};

const Paginate = (props) => {
  const [num, setNum] = useState<number[]>([]);
 
  useEffect(() => {
    for (let a = 1; a <= props?.data?.last_page; a++) {
      const getItem = num.find(a=>a)
      if(!getItem){

        setNum((prev) => [...prev, a]);
      }
    }
  }, [props?.data?.last_page, num]);
 
  return (
    <>
     
      <div style={paginateStyles.flex}>
        <button
          style={paginateStyles.button}
          onClick={() =>
            props.setPage((prevState: number) => Math.max(prevState - 1, 1))
          }
          disabled={props.page === 1}
        >
          Previous
        </button>
        {num?.map((a: number) => (
          <button key={a} style={paginateStyles.page} onClick={()=>props.setPage(a)}>{a}</button>
        ))}
        <button
          style={paginateStyles.button}
          onClick={() =>
            props.setPage((prevState: number) =>
              props.data.next_page_url == null ? prevState : prevState + 1
            )
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Paginate;
