package com.example.blogms.Controller;

import com.example.blogms.Model.Blog;
import com.example.blogms.Service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * @author Aymen Laroussi
 * @project BlogMS
 */

@RestController
@RequestMapping("/blogs")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @GetMapping("/")
    public List<Blog> getAllBlogs() {
        return blogService.getAllBlogs();
    }

    @GetMapping("/{id}")
    public Optional<Blog> getBlogById(@PathVariable int id) {
        return blogService.getBlogById(id);
    }

    @PostMapping("/")
    public Blog createBlog(@RequestBody Blog blog) {
        return blogService.createBlog(blog);
    }

    @PutMapping("/{id}")
    public Blog updateBlog(@PathVariable int id, @RequestBody Blog updatedBlog) {
        return blogService.updateBlog(id, updatedBlog);
    }

    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable int id) {
        blogService.deleteBlog(id);
    }
}
