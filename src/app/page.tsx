import UploadInput from "@/components/upload/uploadInput";

export default function Home() {
    
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold">Convert Image to Pdf</h1>
        <UploadInput />
        <p><strong>Converting Images to PDF: A Step-by-Step Guide</strong></p>
<p>Converting images to a PDF is a straightforward process that can be done using various tools and methods. Here’s a simple guide:</p>
<ol>
    <li><strong>Collect Your Images</strong>: Ensure all images you want to include are ready and in the desired order. They can be in formats like JPEG, PNG, or BMP.</li>
    <li><strong>Choose a Conversion Tool</strong>: You can use online converters, desktop applications like Adobe Acrobat, or even built-in features in Windows or macOS.</li>
    <li><strong>Upload or Select Images</strong>: If using an online tool, upload the images. For desktop applications, select the images from your computer.</li>
    <li><strong>Arrange the Images</strong>: Arrange the images in the order you want them to appear in the PDF.</li>
    <li><strong>Adjust Settings</strong>: Set preferences like page orientation, size, and margins if the tool offers customization options.</li>
    <li><strong>Convert to PDF</strong>: Click the convert button. The tool will process the images and compile them into a single PDF file.</li>
    <li><strong>Download or Save</strong>: Once the conversion is complete, download the PDF to your computer or save it to your desired location.</li>
</ol>
<p>This process is useful for creating portfolios, compiling receipts, or sharing multiple images in a single document.</p>
    </div>
  );
}
