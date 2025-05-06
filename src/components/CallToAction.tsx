
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

const CallToAction = ({
  title,
  description,
  buttonText,
  buttonLink,
  className = "",
}: CallToActionProps) => {
  return (
    <div className={`bg-ai-navy py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-gray-300 mb-8">{description}</p>
        <Link to={buttonLink}>
          <Button size="lg" className="bg-ai-blue hover:bg-ai-blue/90 text-white px-8 py-6 text-lg">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
