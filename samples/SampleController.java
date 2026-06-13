package com.example.apipost.sample;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 用户管理接口
 *
 * 提供用户的增删改查等基础能力，便于插件解析回归测试。
 *
 * @module 用户中心
 */
@RestController
@RequestMapping("/api/v1/users")
@Api(tags = "用户管理")
public class SampleController {

    /**
     * 根据用户 ID 查询用户详情
     *
     * @param id 用户主键
     * @param includeProfile 是否返回完整画像，默认 false
     * @return 用户信息
     */
    @GetMapping("/{id}")
    public UserVO getUser(@PathVariable("id") Long id,
                          @RequestParam(value = "includeProfile", defaultValue = "false") boolean includeProfile) {
        return null;
    }

    /**
     * 创建用户
     *
     * @param body 用户创建请求
     */
    @PostMapping
    public void createUser(@RequestBody UserCreateRequest body) {
    }

    /**
     * 更新用户
     *
     * @param id 用户 ID
     * @param body 更新内容
     */
    @PutMapping("/{id}")
    public void updateUser(@PathVariable Long id, @RequestBody UserUpdateRequest body) {
    }

    /**
     * 删除用户
     */
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
    }

    /**
     * 搜索用户（无注解参数：默认按 query 处理）
     */
    @GetMapping("/search")
    public List<UserVO> search(@RequestParam(required = false) String keyword) {
        return null;
    }
}
