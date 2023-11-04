package com.example.blogms.Repository;

import com.example.blogms.Model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Aymen Laroussi
 * @project BlogMS
 */
@Repository
public interface BlogRepository extends JpaRepository<Blog, Integer> {

}
