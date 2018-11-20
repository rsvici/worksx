angular.module('myapp', ['ionic'])
    .controller('myCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', '$stateParams', function($scope, $state, $http, $httpParamSerializer, $stateParams) {
        // url
        $scope.getQueryString = function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]);
            return null;
        }

        // 获取信息
        $scope.getMemberInfo = function(name, id) {
            $http({
                url: "http://127.0.0.1/courtimg/api/getMemberInfo.php",
                params: {
                    name: name,
                    id: id
                },
                method: 'get',

            }).then(function(res) {
                $scope.MemberInfoList = [1];
                if (res.data.data) {
                    $scope.MemberInfo = res.data.data[0];
                    switch (res.data.data[0].c_class) {
                        case '1':
                            $scope.c_class = '入额法官';
                            break;
                        case '2':
                            $scope.c_class = '协助办案法官';
                            break;
                        case '3':
                            $scope.c_class = '法官助理';
                            break;
                        case '4':
                            $scope.c_class = '书记员';
                            break;
                        case '5':
                            $scope.c_class = '司法行政人员';
                            break;
                        case '6':
                            $scope.c_class = '司法技术人员';
                            break;
                        default:
                            $scope.c_class = res.data.data[0].c_class;
                    }
                } else {
                    $scope.MemberInfo = {
                        c_name: $scope.getQueryString("name")
                    }
                }
                console.log($scope.MemberInfo);



            }, function(error) {

            });
        }

        $scope.getMemberInfo($scope.getQueryString("name"), $scope.getQueryString("id"));
        console.log($scope.getQueryString("id"))
        switch ($scope.getQueryString("id")) {
            case '1':
                $scope.dept = '办公室';
                break;
            case '2':
                $scope.dept = '司法警察大队';
                break;
            case '3':
                $scope.dept = '司法行政装备科';
                break;
            case '4':
                $scope.dept = '立案庭';
                break;
            case '5':
                $scope.dept = '民事审判庭';
                break;
            case '6':
                $scope.dept = '商事审判庭';
                break;
            case '7':
                $scope.dept = '审判监督厅';
                break;
            case '9':
                $scope.dept = '刑事审判庭';
                break;
            case '10':
                $scope.dept = '院长室';
                break;
            case '11':
                $scope.dept = '政治部';
                break;
            case '12':
                $scope.dept = '知识产权审判庭';
                break;
            case '13':
                $scope.dept = '执行裁判庭';
                break;
            case '14':
                $scope.dept = '执行局';
                break;
            case '15':
                $scope.dept = '未成年人与家事案件综合审判庭';
                break;
        }




    }])

var windowHeight = $('.container').height();
var imgNameHeight = $('.imgName').height();
$('.bgPhotoIndex').css({
    height: windowHeight
})
window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(t)
    $('.bgPhotoIndex').stop().animate({
        'margin-top': t * -0.6
    }, 600)
}