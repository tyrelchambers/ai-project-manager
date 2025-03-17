import { FormControl } from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const LLMPicker = ({ value, onChange }: Props) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="LLM Provider" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="openai">OpenAI</SelectItem>
        <SelectItem value="claude">Claude</SelectItem>
        <SelectItem value="ollama">Ollama</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LLMPicker;
