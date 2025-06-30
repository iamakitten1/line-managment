import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";



export default function Home() {
  return (
    <div>
      <Button size={"xs"}  variant={"primary"}> Click me</Button>
      <Button variant={"secondary"}> Secondary</Button>
      <Button variant={"destructive"} size={"lg"}> Destructive</Button> 
      <Button variant={"outline"}> Outline</Button>
      <Button variant={"ghost"}> Ghost</Button>
      <Button variant={"muted"}> Muted</Button>
      <Button variant={"tertiary"}> Tertiary</Button>
      <Input placeholder="Enter your email" />
      <Textarea placeholder="Enter your message" />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>  
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
          <SelectItem value="3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
