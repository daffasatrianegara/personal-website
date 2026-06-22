import MainLayout from "@/components/layouts/main.layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CertificatesData from "@/contents/certificates/index.json";
import { useState } from "react";

const CertificatesPage = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const contentData = CertificatesData.certificates;
  const certificateTypes = [...new Set(contentData.map((data) => data.type))];

  const filteredData =
    selectedType === null
      ? contentData
      : contentData.filter((data) => data.type === selectedType);

  return (
    <MainLayout title="Verified Certifications | Muhammad Daffa Satria Negara">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Certificates</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-5">
        <div className="w-full flex flex-wrap gap-5 items-center">
          <p className="text-xl md:text-2xl font-semibold">
            Verified Certifications
          </p>
          <div className="ms-auto max-[452px]:m-0">
            <Select
              onValueChange={(value) =>
                setSelectedType(value === "all" ? null : value)
              }
            >
              <SelectTrigger className="w-[180px] border-[1.5px]">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Types</SelectItem>
                  {certificateTypes.map((type, index) => (
                    <SelectItem key={index} value={type}>
                      {type.replace(/\b\w/g, (char) => char.toUpperCase())}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-full border-b mt-2 border-gray-200 dark:border-gray-800"></div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        {filteredData.map((data, index) => (
          <div key={index}>
            <a
              className="text-base md:text-xl hover:underline font-medium"
              href={data.url}
              target="_blank"
            >
              {data.status === "badge" ? (
                <>
                  <span className="text-emerald">
                    Completion & skill {data.status}s
                  </span>{" "}
                  - {data.title}
                </>
              ) : (
                <>
                  <span className="text-emerald">
                    Certificate of {data.status}
                  </span>{" "}
                  - {data.title}
                </>
              )}
            </a>
            <p className="text-sm my-1">
              {data.end_date === ""
                ? `${data.published_date}`
                : `${data.published_date} – ${data.end_date}`}
            </p>
            <p className="text-sm my-1">{data.company_name}</p>
            <div className="w-full border-b mt-5 border-gray-200 dark:border-gray-800"></div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default CertificatesPage;
