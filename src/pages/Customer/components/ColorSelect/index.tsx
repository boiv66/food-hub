import "./styles.css"
const ColorSelect = ({data}: any) => {
  return (
    <div className="d-flex">
      {data.map((item: any) => (
        <div>
          <input type="radio" id={item} name="color" value={item} checked/>
          <label htmlFor={item}>
            <span style={{backgroundColor: item}}>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                alt="Checked Icon"
              />
            </span>
          </label>
        </div>
      ))}
    </div>
  )
}
export default ColorSelect
