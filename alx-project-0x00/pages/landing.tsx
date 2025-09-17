import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      {/* Using Card component */}
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Landing
