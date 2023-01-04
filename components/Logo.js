import Image from "next/image";

export default function Logo({ logo, assetDetails }) {
  const imageUrl = assetDetails.find((asset) => {
    return asset.sys.id === logo.sys.id;
  }).fields.file.url;
  const src = `https:${imageUrl}`;

  return (
    <Image
      src={src}
      alt={logo.sys.id}
      width={350}
      height={200}
      style={{
        objectFit: "cover",
      }}
    />
  );
}
