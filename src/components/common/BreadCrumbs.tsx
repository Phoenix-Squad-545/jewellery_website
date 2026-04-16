import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  current: string;
  parents?: BreadcrumbItem[];
}

export default function Breadcrumb({
  current,
  parents = []
}: BreadcrumbProps) {

  return (
    <div className="bg-gray-100 py-4">

      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-2 text-sm">

          {/* Home */}

          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>

          <span className="text-gray-400">/</span>

          {/* Parents */}

          {parents.map((parent, index) => (

            <div
              key={index}
              className="flex items-center gap-2"
            >

              <Link
                to={parent.path}
                className="text-gray-600 hover:text-gray-900"
              >
                {parent.name}
              </Link>

              <span className="text-gray-400">/</span>

            </div>

          ))}

          {/* Current */}

          <span className="text-gray-900 font-medium capitalize">
            {current}
          </span>

        </div>

      </div>

    </div>
  );
}