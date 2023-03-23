import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is an about page like paragraph goes here</p>
        <p>Version of this page is 1.0.0 </p>
        <a href='/'>Back to main page</a>
      </div>
    </Card>
  )
}

export default AboutPage