import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      {/* Using Card component */}
      <Card />
      <Card />
      <Card />

      {/* Buttons Showcase */}
      <div className="mt-10 space-x-4">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="text-base rounded-md" />
        <Button title="Large Rounded" styles="text-lg rounded-full px-6 py-3" />
      </div>
    </div>
  )
}
export default Landing
