const Yarn = (props) => {
  const {name, meterage, weight} = props.yarn
  return (
    <tr>
      <td>{name}</td>
      <td>{meterage}m/{weight}g. </td>
    </tr>
  )
}

export default Yarn