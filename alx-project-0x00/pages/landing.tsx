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
        <Button title="Small Button" styles="px-3 py-1 rounded-sm" />
        <Button title="Medium Button" styles="px-4 py-2 rounded-md" />
        <Button title="Large Button" styles="px-6 py-3 rounded-full" />

      </div>
    </div>
  )
}
export default Landing
