import { Card } from "../ui/card";
import CertificatesData from "@/contents/certificates/index.json";

const CertificatesContent = () => {
  const contentData = CertificatesData.certificates.slice(0, 3);

  return (
    <Card className="p-5">
      <p className="text-base md:text-lg font-semibold">Certificates</p>
      <div className="w-full flex flex-col gap-2 mt-2">
        {contentData.map((data, index) => (
          <div key={index}>
            <a
              className="text-sm hover:underline font-medium"
              href={data.url}
              target="_blank"
            >
              <span className="text-emerald">Certificate of {data.status}</span>{" "}
              - {data.title}
            </a>
            <p className="text-xs my-1">
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
            className="text-base text-emerald underline md:text-sm hover:text-emeraldhover"
          >
            Explore More...
          </a>
        </div>
      </div>
    </Card>
  );
};

export default CertificatesContent;
