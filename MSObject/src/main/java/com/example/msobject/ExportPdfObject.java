package com.example.msobject;

import java.awt.Color;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.lowagie.text.*;
import com.lowagie.text.pdf.*;
import org.springframework.stereotype.Service;


@Service
public class ExportPdfObject {
    private List<Object> listObjects;

    public ExportPdfObject(List<Object> listObjects) {
        this.listObjects= listObjects;
    }

    private void writeTableHeader(PdfPTable table) {
        PdfPCell cell = new PdfPCell();
        cell.setBackgroundColor(Color.PINK);
        cell.setPadding(5);

        com.lowagie.text.Font font = FontFactory.getFont(FontFactory.HELVETICA);
        font.setColor(Color.WHITE);



        cell.setPhrase(new Phrase("Nom", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Catégorie ", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Description", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Expiration date ", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Statut ", font));
        table.addCell(cell);
    }

    private void writeTableData(PdfPTable table) {
        for (Object p : listObjects) {

            table.addCell(p.getName());
            table.addCell(String.valueOf(p.getCategory()));
            table.addCell(p.getDescription());
            table.addCell(String.valueOf(p.getExpirationDate()));
            table.addCell(String.valueOf(p.getStatus()));
        }
    }

    public void export(HttpServletResponse response) throws DocumentException, IOException {
        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());

        document.open();
        Font font = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        font.setSize(18);
        font.setColor(Color.lightGray);

        Paragraph p = new Paragraph("Liste des objets", font);
        p.setAlignment(Paragraph.ALIGN_CENTER);

        document.add(p);

        PdfPTable table = new PdfPTable(5);
        table.setWidthPercentage(100f);
        table.setWidths(new float[] {1.5f, 3.5f, 3.0f, 3.0f, 1.5f});
        table.setSpacingBefore(10);

        writeTableHeader(table);
        writeTableData(table);

        document.add(table);

        document.close();

    }
}
