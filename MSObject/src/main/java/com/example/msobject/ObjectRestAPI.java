package com.example.msobject;


import com.lowagie.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value="/api/objects")
public class ObjectRestAPI {
    @Autowired
    private ObjectService objectService;

    @PostMapping(value = "addObject",produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> createObject(@RequestBody Object Object) {
        return new ResponseEntity<>(objectService.addObject(Object), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Object> updateObject(@PathVariable(value = "id") int id,
                                                   @RequestBody Object Object){
        return new ResponseEntity<>(objectService.updateObject(id, Object), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteObject(@PathVariable(value = "id") int id){
        return new ResponseEntity<>(objectService.deleteObject(id), HttpStatus.OK);
    }
    @GetMapping(value="getAllObjects",produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Object>> getAllObjects() {
        return new ResponseEntity<>(objectService.getAllObjects(), HttpStatus.OK);
    }

    @GetMapping(value="getAllObjects/{pageNo}/{pageSize}",produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Object>> getAllObjectsWithPag(@PathVariable("pageNo") int pageNo, @PathVariable("pageSize") int pageSize) {
        return new ResponseEntity<>(objectService.getAllObjectsWithPag(pageNo,pageSize), HttpStatus.OK);
    }

    @GetMapping(value = "/getByCategory/{category}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Object>> findObjectsByCategory(@PathVariable(value = "category") CategoryEnum category ) {

        return new ResponseEntity<>(objectService.getObjectsByCatgory(category), HttpStatus.OK);
    }

    @GetMapping("export/pdf")
    @ResponseStatus(HttpStatus.OK)
    public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=Objects_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        List<Object> listObjects = objectService.getAllObjects();

        ExportPdfObject exporter = new ExportPdfObject(listObjects);
        exporter.export(response);

    }

    @GetMapping(value = "/getByOrganization/{organizationId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Object>> findObjectsByOrganization(@PathVariable Long organizationId ) {

        return new ResponseEntity<>(objectService.getObjectsByOrganization(organizationId), HttpStatus.OK);
    }
}
