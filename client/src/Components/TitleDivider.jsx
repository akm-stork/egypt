
const TitleDivider = ({name = "TITLE"}) => {
  return (
    <>
        <div className="bold text-primary-multiply-color flex justify-start items-center">
          <h1 style={{fontSize: "1.1rem"}}>{name}</h1>
          <div className="vertical-divider"></div>
        </div>
    </>
  )
}

export default TitleDivider