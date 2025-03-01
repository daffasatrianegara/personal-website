import MainLayout from "@/components/layouts/main.layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CertificatesData from "@/contents/certificates/index.json";

const CertificatesPage = () => {
  const contentData = CertificatesData.certificates;
  
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
        <p className="text-xl md:text-2xl font-semibold">
          Verified Certifications
        </p>
        <div className="w-full border-b mt-2 border-gray-200 dark:border-gray-800"></div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        {contentData.map((data, index) => (
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
