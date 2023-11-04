package com.example.blogms.Service;

import com.example.blogms.Model.Blog;
import com.example.blogms.Repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Aymen Laroussi
 * @project BlogMS
 */

@Service
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    public Optional<Blog> getBlogById(int id) {
        return blogRepository.findById(id);
    }

    public Blog createBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    public Blog updateBlog(int id, Blog blog) {
        if (blogRepository.existsById(id)) {
            blog.setId(id);
            blogRepository.save(blog);
        }
        return blog;
    }

    public void deleteBlog(int id) {
        blogRepository.deleteById(id);
    }
}
