import { Card } from "../ui/card";
import CertificatesData from "@/contents/certificates/index.json";

const CertificatesContent = () => {
  const contentData = CertificatesData.certificates.slice(0, 3);

  return (
    <Card className="p-5 h-full">
      <p className="text-lg md:text-xl font-semibold">Certificates</p>
      <div className="w-full flex flex-col gap-2 mt-2">
        {contentData.map((data, index) => (
          <div key={index}>
            <a
              className="text-sm md:text-base hover:underline font-medium"
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
            <p className="text-xs md:text-sm my-1">
              {data.end_date === ""
                ? `${data.published_date}`
                : `${data.published_date} – ${data.end_date}`}
            </p>
            <p className="text-xs my-1">{data.company_name}</p>
          </div>
        ))}
        <div className="w-full border-b my-1"></div>
        <div className="flex justify-center">
          <a
            href="/certificates"
            className="text-sm text-emerald underline hover:text-emeraldhover"
          >
            Explore More...
          </a>
        </div>
      </div>
    </Card>
  );
};

export default CertificatesContent;
