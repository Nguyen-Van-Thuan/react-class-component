import React from "react";

class HelloWord extends React.Component {
  render() {
    return <h2>Hi, React Frontend 24!</h2>
  }
}

export default HelloWord

// Lưu ý:
// Trước React 16.8, React Class Component là cách duy nhất để theo dõi trạng thái và vòng đời của một thành phần React. Các thành phần chức năng được coi là “không có trạng thái”.
// Với việc bổ sung Hooks, các thành phần Function bây giờ gần như tương đương với các thành phần Class. Sự khác biệt rất nhỏ nên có thể bạn sẽ không bao giờ cần sử dụng thành phần Class trong React.
// Khi tạo một React Component, tên của thành phần đó phải bắt đầu bằng một chữ cái viết hoa.
// Component phải bao gồm câu lệnh extends React.Component, câu lệnh này tạo ra sự kế thừa cho React.Component và cấp cho Component quyền truy cập vào các chức năng của React.Component.
// Component cũng yêu cầu một phương thức render(), phương thức này trả về HTML.