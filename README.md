# react-practise

react编码的文件script标签的type属性为text/babel  
是因为React独有的jsx语法，跟JavaScript不兼容，凡是使用jsx的地方，都要加上type="text/babel".  
react.js是React的核心库，react-dom.js是提供与DOM相关的功能，Browser.js的作用是将jsx语法转为JavaScript语法，这一步很消耗时间，实际上线的时候，应该将它放到服务器完成  
ReactDOM.render是React的最基本方法，用于将模板转为HTML语言，并插入指定的DOM节点  
React.createClass方法用于生成一个组件类  
组件类的第一个字母必须大写，组件类只能包含一个顶层标签  
组件的用法与原生的HTML标签完全一致，可以任意加属性  
组件的属性可以在组件类的this.props对象上获取  
添加组件属性，需要注意，将class属性写成className，for属性写成htmlFor，这是因为class和for是JavaScript的保留字  
this.props对象的属性与组件的属性一一对应，但有一个例外，  
this.props.children属性，它表示组件的所有子节点  
this.props.children的值有三种可能：如果当前组件没有子节点，它就是undefined；如果有一个子节点，数据类型是object；如果有多个子节点，数据类型是array。  
React提供一个工具方法，React.Children来处理this.props.children，可以用React.Children.map来遍历子节点，不用担心this.props.children的数据类型是undefined还是object  
组件类的PropTypes属性用来验证组件实例的属性是否符合要求  
组件并不是真实的DOM节点，而是存在于内存之中的一种数据结构，叫做虚拟DOM  
有时需要从组件获取真实DOM的节点，这时就要用到ref属性  
组件免不了要与用户互动，React的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染UI  
getInitialState方法用于定义初始状态，也就是一个对象，这个对象可以通过this.state属性读取。this.setState方法修改状态值，每次修改后，自动调用this.render方法，再次渲染组件  
this.props表示那些一旦定义，就不再改变的特性，而this.state是会随着用户互动而产生变化的特性  
组件的生命周期分成三个状态：  
Mounting：已插入真实DOM  
Updating：正在被重新渲染  
Unmounting：已移出真实DOM