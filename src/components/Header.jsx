import PropTypes from 'prop-types'

function Header( {text, bgColor, textColor} ) {

    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor
    }

  return (
    <header style = {headerStyles}>
        <div className = "container" >
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "ACES Data Heading UI for showing Wyn",
    bgColor: 'white',
    textColor: 'red',
}

Header.propTypes = {
    text: PropTypes.string,
    bfColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header