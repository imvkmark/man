# 与变量和类型有关的扩展 - Classes/Objects


这些函数允许你获得类和对象的实例的相关信息, 通过这些函数可以找到类和对象的关系

- 不需要安装

## 函数

`void __autoload ( string $class )`

尝试加载未定义的类
通过定义这个函数来启用类的自动加载

~~call_user_method_array~~
[see] call_user_func_array

~~call_user_method~~
[see] call_user_func

`bool class_alias ( string $original , string $alias [, bool $autoload = TRUE ] )`
[5.3]建立一个类的别名,这个别名也可以被使用来建立新的类




`bool class_exists ( string $class_name [, bool $autoload = true ] )`

检查一个类是否存在

`string get_called_class ( void )`

获取静态方法[后期静态绑定（"Late Static Binding"）]调用的类名

`array get_class_methods ( mixed $class_name )`

返回由类的方法名组成的数组

`array get_class_vars ( string $class_name )`

返回由类的默认公有属性组成的关联数组，此数组的元素以 varname => value 的形式存在

`string get_class ([ object $obj ] )`

返回对象的类名

`array get_declared_classes ( void )`

返回由已定义类的名字所组成的数组

`array get_declared_interfaces ( void )`

返回一个数组包含所有已声明的接口

`array get_declared_traits ( void )`

[5.4.0] 
返回所有已定义的 traits 的数组
traits  代码复用的方式

`array get_object_vars ( object $obj )`

获取对象属性组成的关联数组

`string get_parent_class ([ mixed $obj ] )`

返回对象或类的父类名

`bool interface_exists ( string $interface_name [, bool $autoload = true ] )`

检查接口是否已经被定义

`bool is_a ( object $object , string $class_name )`

[see] instanceof
 检查对象是否是某个类/父类 的实例

`bool is_subclass_of ( object $object , string $class_name )`

检查对象是否该类的子类

`bool method_exists ( mixed $object , string $method_name )`

方法是否存在

`bool property_exists ( mixed $class , string $property )`

属性是否存在, 这个只是检测参数是否存在而不去检测这个值是否被设置

`bool trait_exists ( string $traitname [, bool $autoload ] )`

[5.4.0] 
检测指定的trait 是否存在
