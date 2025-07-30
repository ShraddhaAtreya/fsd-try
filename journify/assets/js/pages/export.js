// Export page logic for Journify Web Application

document.addEventListener("DOMContentLoaded", function() {
    const exportButton = document.getElementById("export-button");
    const pdfPreviewButton = document.getElementById("pdf-preview-button");
    const exportOptions = document.getElementById("export-options");
    const downloadHistory = document.getElementById("download-history");

    // Function to handle PDF export
    exportButton.addEventListener("click", function() {
        const selectedOption = exportOptions.value;
        generatePDF(selectedOption);
    });

    // Function to generate PDF based on selected option
    function generatePDF(option) {
        // Logic to generate PDF using jsPDF
        const doc = new jsPDF();
        doc.text("Journify Export", 10, 10);
        
        // Add content based on the selected option
        if (option === "full") {
            doc.text("Full journal content goes here...", 10, 20);
        } else if (option === "highlights") {
            doc.text("Highlights content goes here...", 10, 20);
        } else if (option === "therapist") {
            doc.text("Therapist-friendly format content goes here...", 10, 20);
        }

        // Save the PDF
        doc.save("journify_export.pdf");
        updateDownloadHistory(option);
    }

    // Function to update download history
    function updateDownloadHistory(option) {
        const historyItem = document.createElement("li");
        historyItem.textContent = `Downloaded: ${option} on ${new Date().toLocaleString()}`;
        downloadHistory.appendChild(historyItem);
    }

    // Function to preview PDF before download
    pdfPreviewButton.addEventListener("click", function() {
        const selectedOption = exportOptions.value;
        previewPDF(selectedOption);
    });

    // Function to preview PDF
    function previewPDF(option) {
        // Logic to generate PDF preview
        const doc = new jsPDF();
        doc.text("Preview of Journify Export", 10, 10);
        
        if (option === "full") {
            doc.text("Full journal content preview...", 10, 20);
        } else if (option === "highlights") {
            doc.text("Highlights content preview...", 10, 20);
        } else if (option === "therapist") {
            doc.text("Therapist-friendly format preview...", 10, 20);
        }

        // Open PDF in a new window
        window.open(doc.output('bloburl'), '_blank');
    }
});