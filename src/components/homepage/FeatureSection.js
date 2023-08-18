import React from "react";
import { FiCheckCircle, FiList, FiCalendar } from "react-icons/fi";

const FeatureSection = () => {
  return (
    <div className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Features of Task Manager
        </h2>
        <div className="flex flex-wrap justify-center -mx-4">
          <FeatureCard
            icon={<FiCheckCircle className="text-white w-8 h-8" />}
            title="Easy Task Management"
            description="Organize your tasks effortlessly using our intuitive task management system."
          />
          <FeatureCard
            icon={<FiList className="text-white w-8 h-8" />}
            title="Task Categories"
            description="Categorize your tasks into different categories for better organization."
          />
          <FeatureCard
            icon={<FiCalendar className="text-white w-8 h-8" />}
            title="Due Date Reminders"
            description="Set due date reminders to stay on top of your tasks and deadlines."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8">
      <div className="bg-blue-700 rounded-lg p-6 flex items-center justify-center flex-col h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white text-center">{description}</p>
      </div>
    </div>
  );
};

export default FeatureSection;
