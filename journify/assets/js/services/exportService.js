// This file handles PDF export functionality for the Journify application.

const { jsPDF } = window.jspdf; // Import jsPDF from the jsPDF library

class ExportService {
    constructor() {
        this.doc = new jsPDF();
    }

    // Method to export the full journal
    exportFullJournal(entries, moodCalendar) {
        this.doc.setFontSize(16);
        this.doc.text("Journify - Full Journal Export", 10, 10);
        this.doc.setFontSize(12);

        entries.forEach((entry, index) => {
            this.doc.text(`Entry ${index + 1}:`, 10, 20 + (index * 30));
            this.doc.text(`Date: ${entry.date}`, 10, 25 + (index * 30));
            this.doc.text(`Mood: ${entry.mood}`, 10, 30 + (index * 30));
            this.doc.text(`Note: ${entry.moodNote}`, 10, 35 + (index * 30));
            this.doc.text(`Journal Entry:`, 10, 40 + (index * 30));
            this.doc.text(entry.journalEntry.wentWell, 10, 45 + (index * 30));
            this.doc.text(entry.journalEntry.couldImprove, 10, 50 + (index * 30));
            this.doc.text(entry.journalEntry.tomorrowGoal, 10, 55 + (index * 30));
        });

        this.doc.addPage();
        this.doc.text("Mood Calendar", 10, 10);
        this.doc.text(moodCalendar, 10, 20); // Assuming moodCalendar is a string representation

        this.doc.save("journify_full_journal.pdf");
    }

    // Method to export highlights only
    exportHighlights(entries) {
        this.doc.setFontSize(16);
        this.doc.text("Journify - Highlights Export", 10, 10);
        this.doc.setFontSize(12);

        entries.forEach((entry, index) => {
            if (entry.mood === 'happy') { // Example condition for highlights
                this.doc.text(`Highlight ${index + 1}:`, 10, 20 + (index * 30));
                this.doc.text(`Date: ${entry.date}`, 10, 25 + (index * 30));
                this.doc.text(`Mood: ${entry.mood}`, 10, 30 + (index * 30));
                this.doc.text(`Note: ${entry.moodNote}`, 10, 35 + (index * 30));
            }
        });

        this.doc.save("journify_highlights.pdf");
    }

    // Method to export a specific date range
    exportDateRange(entries, startDate, endDate) {
        this.doc.setFontSize(16);
        this.doc.text("Journify - Date Range Export", 10, 10);
        this.doc.setFontSize(12);

        entries.forEach((entry, index) => {
            const entryDate = new Date(entry.date);
            if (entryDate >= new Date(startDate) && entryDate <= new Date(endDate)) {
                this.doc.text(`Entry ${index + 1}:`, 10, 20 + (index * 30));
                this.doc.text(`Date: ${entry.date}`, 10, 25 + (index * 30));
                this.doc.text(`Mood: ${entry.mood}`, 10, 30 + (index * 30));
                this.doc.text(`Note: ${entry.moodNote}`, 10, 35 + (index * 30));
            }
        });

        this.doc.save("journify_date_range_export.pdf");
    }
}

const exportService = new ExportService();
export default exportService;