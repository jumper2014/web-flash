package cn.enilu.flash.api.controller.atool;


import cn.enilu.flash.api.controller.BaseController;
import cn.enilu.flash.api.helper.MySQLHelper;
import cn.enilu.flash.bean.vo.front.Rets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 测试工具
 */
@RestController
@RequestMapping("/pb")
public class PortalBaseController extends BaseController {
    @PostMapping("/setUserStatus")
    public Object setUserStatus(String userName, String status){
        MySQLHelper helper = new MySQLHelper();
        JdbcTemplate jdbcTemplate = helper.connectPortalBaseCustDb();
        String sql = "UPDATE cspb_user SET user_status='"+status + " 'WHERE user_name='" + userName + "'";
        System.out.println(sql);
        jdbcTemplate.update(sql);
        return Rets.success();
    }

}
